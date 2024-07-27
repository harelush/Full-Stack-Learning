import java.util.Scanner;

public class ThirdQuestion {
    public static void main(String[] args) throws Exception {
        repeatUntil();
    }

    public static void repeatUntil(){
        Scanner scanner = new Scanner(System.in);
        final int END_OF_INPUT = 999;

        System.out.println("Enter a number: to stop enter " + END_OF_INPUT);
        int userInput = scanner.nextInt();

        while(userInput != END_OF_INPUT){
            System.out.println("The input is");
            System.out.println(userInput);

            System.out.println("Enter a number: to stop enter " + END_OF_INPUT);
            userInput = scanner.nextInt();
        }
    }
}
