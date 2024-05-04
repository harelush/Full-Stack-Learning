public class Overload {
    public static void main(String[] args) {
        int result = add(5, 6);
        add(5,6);
        add(5,6,7);
        add(1.0,6);
        add(1,2.0);
        System.out.println(result);
        System.out.println(add(10, 20));
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static double add(double a, int b) {
        return a + b;
    }

    public static double add(int a, double b) {
        return a + b;
    }

}
