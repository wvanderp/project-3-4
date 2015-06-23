import lejos.nxt.*;


public class Lego {
    
    public static void main(String[] args) {
  
int bedrag = 50;
    	int tijdelijk;
    	
    	int motora =9;
    	int motorb =19;
    	int motorc = 49;
    	
    	int groot=1;
    	int normaal=0;
    	int klein=0;
    	//normaal biljetten
    	if(groot==1){
    		while(bedrag>0)
    	{
    		while(bedrag>motorc)
    		{
    			 Motor.C.setSpeed(750);
    	    	 Motor.C.backward();
    	    	 Motor.C.rotate(-375);
    	    	 Motor.C.stop();
    	    	 Motor.C.forward();
    	    	 Motor.C.rotate(120);
    	    	 Motor.C.stop();
    	    	tijdelijk = 50;
     			bedrag = bedrag -tijdelijk;
     			System.out.println("50 gepint");  	
    		}  		
    		while(bedrag>motorb)
    		{
    			Motor.B .setSpeed(750);
        		Motor.B.backward();
        		Motor.B.rotate(-375);
        	 	Motor.B.stop();
        	 	Motor.B.forward();
        	 	Motor.B.rotate(120);
        	 	Motor.B.stop();
        	 	tijdelijk = 20;
    			bedrag = bedrag-tijdelijk;
    			System.out.println("20 gepint");  
    			
    		}
   
    		while(bedrag>motora)
    		{    	
    			Motor.A.setSpeed(750);
    			Motor.A.backward();
    			Motor.A.rotate(-375);
    			Motor.A.stop();
    			Motor.A.forward();
    			Motor.A.rotate(120);
    			Motor.A.stop();
    			tijdelijk = 10;
    			bedrag =bedrag -tijdelijk;
    			System.out.println("10 gepint");  
    			
    		}
    		System.out.println("bedrag is kleiner als 10");
    		break;
    	}
    	}   	
    	//als je meer twintigjes wilt
    	if(normaal==1)
    	{
    		while(bedrag >0)
        	{
        		while(bedrag>139)
        		{
        			 Motor.C.setSpeed(750);
        	    	 Motor.C.backward();
        	    	 Motor.C.rotate(-375);
        	    	 Motor.C.stop();
        	    	 Motor.C.forward();
        	    	 Motor.C.rotate(120);
        	    	 Motor.C.stop();
        	    	tijdelijk = 50;
         			bedrag = bedrag -tijdelijk;
         			System.out.println("50 gepint");  	
        		}  		
        		while(bedrag>19)
        		{
        			Motor.B .setSpeed(750);
            		Motor.B.backward();
            		Motor.B.rotate(-375);
            	 	Motor.B.stop();
            	 	Motor.B.forward();
            	 	Motor.B.rotate(120);
            	 	Motor.B.stop();
            	 	tijdelijk = 20;
        			bedrag = bedrag-tijdelijk;
        			System.out.println("20 gepint");  
        			
        		}
       
        		while(bedrag>9)
        		{    	
        			Motor.A.setSpeed(750);
        			Motor.A.backward();
        			Motor.A.rotate(-375);
        			Motor.A.stop();
        			Motor.A.forward();
        			Motor.A.rotate(120);
        			Motor.A.stop();
        			tijdelijk = 10;
        			bedrag =bedrag -tijdelijk;
        			System.out.println("10 gepint");  
        			
        		}
        		System.out.println("bedrag is kleiner als 10");
        		break;
        	}
    	}
    	
    	 if(klein ==1)
    	 {
    		 while(bedrag >0)
         	{
         		while(bedrag>99)
         		{
         			 Motor.C.setSpeed(750);
         	    	 Motor.C.backward();
         	    	 Motor.C.rotate(-375);
         	    	 Motor.C.stop();
         	    	 Motor.C.forward();
         	    	 Motor.C.rotate(120);
         	    	 Motor.C.stop();
         	    	tijdelijk = 50;
          			bedrag = bedrag -tijdelijk;
          			System.out.println("50 gepint");  	
         		}  		
         		while(bedrag>60)
         		{
         			Motor.B .setSpeed(750);
             		Motor.B.backward();
             		Motor.B.rotate(-375);
             	 	Motor.B.stop();
             	 	Motor.B.forward();
             	 	Motor.B.rotate(120);
             	 	Motor.B.stop();
             	 	tijdelijk = 20;
         			bedrag = bedrag-tijdelijk;
         			System.out.println("20 gepint");  
         			
         		}
        
         		while(bedrag>9)
         		{    	
         			Motor.A.setSpeed(750);
         			Motor.A.backward();
         			Motor.A.rotate(-375);
         			Motor.A.stop();
         			Motor.A.forward();
         			Motor.A.rotate(120);
         			Motor.A.stop();
         			tijdelijk = 10;
         			bedrag =bedrag -tijdelijk;
         			System.out.println("10 gepint");  
         			
         		}
         		System.out.println("bedrag is kleiner als 10");
         		break;
         	}
     	}
    }
}
