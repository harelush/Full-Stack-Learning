import java.util.Scanner;

public class ThirdQuestion {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        System.out.print("please supply a width: ");
        double width = input.nextDouble();
        System.out.println("please supply a height");
        double height = input.nextDouble();

        System.out.println("the ares is: ");
        System.out.println(area(width,height));
    }

    public static int area(int width, int height) {
        System.out.println("first function called");
        return width * height;
    }

    public static double area(double width, int height) {
        System.out.println("second function called");
        return width * height;
    }

    public static double area(double width, double height) {
        System.out.println("third function called");
        return width * height;
    }


}
