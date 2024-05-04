public class ThirdQuestion {
    public static void main(String[] args) throws Exception {
        System.out.println(area(4,3));

        int result = area(3, 4);
        System.out.println(result);
        System.out.println(area(3.0,8));
        System.out.println(area(5.0,6.0));

        area(2.0,1);
        area(1,2.0);

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

