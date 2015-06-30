import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Money{
	public static void main(String[] args) {
	int ma= Integer.parseInt(args[0]);
	int mb= Integer.parseInt(args[1]);
	int mc= Integer.parseInt(args[2]);
	int md= Integer.parseInt(args[3]);
		
		
		//Setting java files process:
		ArrayList<String> lines = new ArrayList<String>();
		String line = null;
		try {
            File f1 = new File("./Lego.java");
            FileReader fr = new FileReader(f1);
            BufferedReader br = new BufferedReader(fr);
            while ((line = br.readLine()) != null) {
                if (line.contains("int bedrag"))
                    line = "int bedrag = " + ma + ";";
                else if(line.contains("int groot"))
                	line = "int groot = " + mb + ";";
                else if(line.contains("int normaal"))
                	line = "int normaal = " + mc + ";";
				else if(line.contains("int klein"))
                	line = "int klein = " + md + ";";
                line = line + "\r\n";
                lines.add(line);
            }
            fr.close();
            br.close();

            FileWriter fw = new FileWriter(f1);
            BufferedWriter out = new BufferedWriter(fw);
            for(String s : lines)
                 out.write(s);
            out.flush();
            out.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
		
		//Building process:
		ProcessBuilder builder = new ProcessBuilder("cmd.exe", "/c", "nxjc Lego.java && nxj -r Lego");
        builder.redirectErrorStream(true);
        try {
	        Process p = builder.start();
	        BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
	        while (true) {
	            line = r.readLine();
	            if (line == null) { break; }
	            System.out.println(line);
	        }
        }
        catch(IOException ie) {
        	
		}   	
        
	
}
}