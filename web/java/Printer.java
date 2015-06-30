import java.awt.print.PrinterException;
import java.awt.print.PrinterJob;

/**
 * Created by wouter on 29-6-2015.
 */
public class Printer {
    public void print(String message)
    {
        PrinterJob job = PrinterJob.getPrinterJob();
        job.setPrintable(new OutputPrinter(message));
//        boolean doPrint = job.printDialog();
//        if (doPrint)
//        {
            try
            {
                job.print();
            }
            catch (PrinterException e)
            {
                // Print job did not complete.
            }
//        }
    }
}
