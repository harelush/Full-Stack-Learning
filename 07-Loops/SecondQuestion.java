import java.util.Scanner;

public class SecondQuestion {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter how many loops: ");
        int loops = scanner.nextInt();
        repeat(loops);
    }

    public static void repeat(int amount){
        Scanner scanner = new Scanner(System.in);

        for (int index = 0; index < amount; index++) {
            System.out.println("Enter a number: ");
            int userInput = scanner.nextInt();
            System.out.println(userInput);
        }
    }
}
