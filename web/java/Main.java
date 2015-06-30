/**
 * Created by wouter on 29-6-2015.
 */
public class Main {
    public static void main(String [] args) {
       System.out.print(args[0]);
       Printer p = new Printer();
       p.print(args[0]);
    }
}
