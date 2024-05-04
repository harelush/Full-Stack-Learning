public class ReturnValue {
    public static void main(String[] args) {
        int result = add(5, 6);
        System.out.println(result);
        System.out.println(add(10, 20));
    }

    public static int add(int a, int b) {
        return a + b;
    }

}
