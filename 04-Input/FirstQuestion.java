import java.util.Scanner;

public class FirstQuestion {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);


        System.out.println("Enter your first number please :)");
        int first = input.nextInt();
        System.out.println("Enter your second number please :)");
        int second = input.nextInt();

        System.out.println("the result is:");
        System.out.println(first + second);

    }
}
