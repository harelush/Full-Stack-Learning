public class Scope {
    public static void main(String[] args) throws Exception {
        int x = 5;
        System.out.println(x);

        example();
        
    }

    public static void example() {
        int x = 55;

    }

    public static void otherExample() {
        x = 55;
    }
}
