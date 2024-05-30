import java.util.Scanner;

public class SecondQuestion {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        System.out.println("Please enter your age:");
        double age = input.nextDouble();

        final int MIN_AGE = 18;

        if(age >= MIN_AGE) {
            System.out.println("Welcome! you can enter!!!");
        } else {
            System.out.println("please come back later");
        }


    }
}
