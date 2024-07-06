import java.util.Scanner;

public class FirstQuestion {
    public static void main(String[] args) throws Exception {
        repeat();
    }

    public static void repeat(){
        final int AMOUNT = 10;
        Scanner scanner = new Scanner(System.in);

        for (int index = 0; index < AMOUNT; index++) {
            System.out.println("Enter a number: ");
            int userInput = scanner.nextInt();
            System.out.println(userInput);
        }
    }
}
