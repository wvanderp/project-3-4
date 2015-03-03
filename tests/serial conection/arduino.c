int i = 0;

void setup(){
	Serial.begin(9600);
}

void loop(){
	Serial.println(i);
	i++;
	
	if(i == 10){
		i = 0;
	} 
	
	delay(500);
}