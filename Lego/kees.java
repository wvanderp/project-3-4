
public class kees {
    
    public static void main(String[] args){
    	
        int orgbedrag=500;
    	int bedrag ;    	
    	int tijdelijk;
    	
    	int motora =9;
    	int motorb =19;
    	int motorc = 49;
    	
        int i = 0;
        int j = 0;
        int k = 0;
    	boolean groot=true;
    	boolean normaal=false;
    	boolean klein=false;
        bedrag=orgbedrag;
    	
        if(bedrag>500)
        {
        	System.out.println("je kan niet zoveel pinnen");
        	
        }
        else{

    	if(groot==true)
    	{
    	
            while(bedrag >0)
    	{
    		while(bedrag>motorc)
    		{
    		
                        tijdelijk = 50;
     			bedrag = bedrag -tijdelijk;
     			i++;
    		}  		
    		while(bedrag>motorb)
    		{
    			
        	 	tijdelijk = 20;
    			bedrag = bedrag-tijdelijk;
    			j++;
    			
    		}
   
    		while(bedrag>motora)
    		{    	
    			
    			tijdelijk = 10;
    			bedrag =bedrag -tijdelijk;
    			k++;
    		}
                System.out.println("je hebt gekozen voor groot mogelijk biljetten");
                System.out.println("het bedrag was:"+orgbedrag);
                System.out.println("biljetten van 50:"+i);
                System.out.println("biljetten van 20:"+j);
                System.out.println("biljetten van 10:"+k);
    		break;
    	}
    	}
    	
    	//als je meer twintigjes wilt
    	if(normaal==true)
    	{
    		while(bedrag >0)
        	{
        		while(bedrag>139)
        		{
        			
        	    	
        	    	tijdelijk = 50;
         			bedrag = bedrag -tijdelijk;
         			i++; 	
        		}  		
        		while(bedrag>19)
        		{
        		
       
            	 	tijdelijk = 20;
        			bedrag = bedrag-tijdelijk;
        			j++;
        			
        		}
       
        		while(bedrag>9)
        		{    	
        			
        			tijdelijk = 10;
        			bedrag =bedrag -tijdelijk;
        			k++;  
        			
        		}
        		System.out.println("je hebt gekozen voor groot kleinere biljetten");
    		System.out.println("het bedrag was:"+orgbedrag);
                System.out.println("biljetten van 50:"+i);
                System.out.println("biljetten van 20:"+j);
                System.out.println("biljetten van 10:"+k);
        		break;
        	}
    	}
    	
    	
    	 if(klein ==true)
    	 {
    		 while(bedrag >0)
         	{
         		while(bedrag>99)
         		{
         			
         	    	
         	    	tijdelijk = 50;
          			bedrag = bedrag -tijdelijk;
          			i++;  	
         		}  		
         		while(bedrag>60)
         		{
         		
             	 	tijdelijk = 20;
         			bedrag = bedrag-tijdelijk;
         		 
         			j++;
         		}
        
         		while(bedrag>9)
         		{    	
         			
         			tijdelijk = 10;
         			bedrag =bedrag -tijdelijk;
         			k++;  
         			
         		}
         		System.out.println("je hebt gekozen voor groot kleinste biljetten");
    		System.out.println("het bedrag was:"+orgbedrag);
                System.out.println("biljetten van 50:"+i);
                System.out.println("biljetten van 20:"+j);
                System.out.println("biljetten van 10:"+k);
                break;
         	}
     	}
    }}
}
	
    		     	
    		   
    		    