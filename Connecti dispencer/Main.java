
import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.DataListener;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import org.json.*;


public class Main {

    public static SocketIOClient client;
    static boolean connected;
    // b

    public Main() {
        Configuration config = new Configuration();
        config.setHostname("localhost");
        config.setPort(80);
        SocketIOServer server = new SocketIOServer(config);

        server.addEventListener("Amount", SocketAmount.class, new DataListener<SocketAmount>() {

            public void onData(SocketIOClient client, SocketAmount data, AckRequest req)
                    throws Exception {

                System.out.println("a =" + data.getA());
                System.out.println("b =" + data.getB());
                System.out.println("c =" + data.getC());
                System.out.println("d= " + data.getD());
                int a = data.getA();
                int b = data.getB();
                int c = data.getC();
                int d = data.getD();
                printMoney(a,b,c,d);
                
            }

        });

        server.addConnectListener(new ConnectionListener() {
            @Override
            public void onConnect(SocketIOClient clientc) {
                client = clientc; // Set static connection ( only 1 allowed )
                System.out.println("Connected");
                connected = true;

            }

            public void onDisConnect(SocketIOClient clientc) {
                client = null; //  Disconnect
                System.out.println("Disconnected");
                connected = false;

            }
        });
    }
     public void printMoney(int ma, int mb, int mc, int md) {
        ArrayList<String> lines = new ArrayList<String>();
        String line = null;
        try {

            File f1 = new File("./Lego.java");
            FileReader fr = new FileReader(f1);
            BufferedReader br = new BufferedReader(fr);
            while ((line = br.readLine()) != null) {
                if (line.contains("int bedrag")) {
                    line = "int bedrag = " + ma + ";";
                } else if (line.contains("boolean groot")) {
                    line = "boolean groot = " + mb + ";";
                } else if (line.contains("boolean normaal")) {
                    line = "boolean klein = " + mc + ";";
                } else if (line.contains("int dispenserC")) {
                    line = "boolean klein = " + md + ";";
                }
                line = line + "\r\n";
                lines.add(line);
            }
            fr.close();
            br.close();

            FileWriter fw = new FileWriter(f1);
            BufferedWriter out = new BufferedWriter(fw);
            for (String s : lines) {
                out.write(s);
            }
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
                if (line == null) {
                    break;
                }
                System.out.println(line);
            }
        } catch (IOException ie) {

        }

    }
}



   /*     server.start();
    }
    server.addEventListener ;

    public void sendObject(String str, JSONObject sendObj) {
        if (connected) {
            client.sendEvent(str, sendObj.toJSONString());
        } else {
            System.out.println("Je bent niet connected met Node Webkit");
        }
    }

    public void sendObjectArray(JSONObject sendObj) {
        if (connected) {
            client.sendEvent("update", sendObj.toJSONString());
        } else {
            System.out.println("Je bent niet connected met Node Webkit, kill");
        }
    }

}
*/