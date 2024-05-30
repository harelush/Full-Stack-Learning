import java.util.Scanner;

public class Bug {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number1 = scanner.nextInt();

        System.out.print("Enter another number: ");
        int number2 = scanner.nextInt();

        int result;

        result = number1 / number2; 
        System.out.println("Division result: " + result);

        System.out.print("Enter a number between 1 and 10: ");
        int number3 = scanner.nextInt();

        if (number3 > 0 && number3 < 10) {
            System.out.println("You entered a valid number: " + number3);
        } else {
            System.out.println("Number not in range!");
        }

        scanner.close();
    }
}
