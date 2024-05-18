public class BooleanOperators {
    public static void main(String[] args) throws Exception {
        operators();

    }

    public static void operators(){
        int x = 5;
        int y = 7;

        System.out.println(5 == 7);
        System.out.println(5 != 7);
        System.out.println(x > y);
        System.out.println(x >= y);
        System.out.println(x < y);
        System.out.println(7 <= 7);
        

        System.out.println("----------");
        System.out.println(x == 5 && x < y && x > 7 && y <= x ||);
        System.out.println(x < 6 || y > x);
        System.out.println(!(x < 6) || !(y > x));
        System.out.println(!(x < 6 || y > x));




    }
}
