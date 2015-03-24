 /*
 ********rfid reader*****
 * RST/Reset   RST          9            
 * SPI SS      SDA(SS)      10 
 * SPI MOSI    MOSI         11 
 * SPI MISO    MISO         12 
 * SPI SCK     SCK          13
*/

#include <SPI.h>//include the SPI bus library
#include <MFRC522.h>//include the RFID reader library
#include <Keypad.h>

#define ledpin 8
#define SS_PIN 10  //slave select pin
#define RST_PIN A0  //reset pin
MFRC522 mfrc522(SS_PIN, RST_PIN);        // instatiate a MFRC522 reader object.
MFRC522::MIFARE_Key key;//create a MIFARE_Key struct named 'key', which will hold the card information

const byte ROWS = 4; // Four rows
const byte COLS = 4; // Three columns

// Define the Keymap
char keys[COLS][ROWS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'N','0','J','D'}
};
// Connect keypad ROW0, ROW1, ROW2 and ROW3 to these Arduino pins.
byte rowPins[ROWS] = { 8, 7, 6, 5 };
// Connect keypad COL0, COL1 and COL2 to these Arduino pins.
byte colPins[COLS] = { 4,3, 2, 9 }; 

// Create the Keypad
Keypad kpd = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );


void setup() {
        pinMode(ledpin,OUTPUT);
        digitalWrite(ledpin, HIGH);
        Serial.begin(9600);        // Initialize serial communications with the PC
        SPI.begin();               // Init SPI bus
        mfrc522.PCD_Init();        // Init MFRC522 card (in case you wonder what PCD means: proximity coupling device)
        Serial.println("Scan a MIFARE Classic card");
        
        // Prepare the security key for the read and write functions - all six key bytes are set to 0xFF at chip delivery from the factory.
        // Since the cards in the kit are new and the keys were never defined, they are 0xFF
        // if we had a card that was programmed by someone else, we would need to know the key to be able to access it. This key would then need to be stored in 'key' instead.
 
        for (byte i = 0; i < 6; i++) {
                key.keyByte[i] = 0xFF;//keyByte is defined in the "MIFARE_Key" 'struct' definition in the .h file of the library
        }

}

int block=2;
//this is the block number we will write into and then read. Do not write into 'sector trailer' block, since this can make the block unusable.

byte blockcontent[16] = {"Rekening "};//an array with 16 bytes to be written into one of the 64 card blocks is defined
//byte blockcontent[16] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};//all zeros. This can be used to delete a block.
byte readbackblock[18];//This array is used for reading out a block. The MIFARE_Read method requires a buffer that is at least 18 bytes to hold the 16 bytes of a block.



void loop()
{

        /*****************************************establishing contact with a tag/card**********************************************************************/
        
  	// Look for new cards (in case you wonder what PICC means: proximity integrated circuit card)
	if ( ! mfrc522.PICC_IsNewCardPresent()) {//if PICC_IsNewCardPresent returns 1, a new card has been found and we continue
		return;//if it did not find a new card is returns a '0' and we return to the start of the loop
	}

	// Select one of the cards
	if ( ! mfrc522.PICC_ReadCardSerial()) {//if PICC_ReadCardSerial returns 1, the "uid" struct (see MFRC522.h lines 238-45)) contains the ID of the read card.
		return;//if it returns a '0' something went wrong and we return to the start of the loop
	}

        // Among other things, the PICC_ReadCardSerial() method reads the UID and the SAK (Select acknowledge) into the mfrc522.uid struct, which is also instantiated
        // during this process.
        // The UID is needed during the authentication process
        	//The Uid struct:
	        //typedef struct {
		//byte		size;			// Number of bytes in the UID. 4, 7 or 10.
		//byte		uidByte[10];            //the user ID in 10 bytes.
		//byte		sak;			// The SAK (Select acknowledge) byte returned from the PICC after successful selection.
	        //} Uid;
         
         Serial.println("card selected");
         
         /*****************************************writing and reading a block on the card**********************************************************************/
         
         writeBlock(block, blockcontent);//the blockcontent array is written into the card block
         //mfrc522.PICC_DumpToSerial(&(mfrc522.uid));
         
         //The 'PICC_DumpToSerial' method 'dumps' the entire MIFARE data block into the serial monitor. Very useful while programming a sketch with the RFID reader...
         //Notes:
         //(1) MIFARE cards conceal key A in all trailer blocks, and shows 0x00 instead of 0xFF. This is a secutiry feature. Key B appears to be public by default.
         //(2) The card needs to be on the reader for the entire duration of the dump. If it is removed prematurely, the dump interrupts and an error message will appear.
         //(3) The dump takes longer than the time alloted for interaction per pairing between reader and card, i.e. the readBlock function below will produce a timeout if
         //    the dump is used.
         
	 //mfrc522.PICC_DumpToSerial(&(mfrc522.uid));//uncomment this if you want to see the entire 1k memory with the block written into it.
         
         readBlock(block, readbackblock);//read the block back
         Serial.print("read block: ");
         for (int j=0 ; j<16 ; j++)//print the block contents
         {
           Serial.write (readbackblock[j]);//Serial.write() transmits the ASCII numbers as human readable characters to serial monitor
         }
         Serial.println("");
         
  


  char key = kpd.getKey();
  if(key)  // Check for a valid key.
  {
    switch (key)
    {
      case '*':
        digitalWrite(ledpin, LOW);
        break;
      case '#':
        digitalWrite(ledpin, HIGH);
        break;
      default:
        Serial.println(key);
    }
  }
}


