public class Conditions {
    public static void main(String[] args) throws Exception {
        int x = 7;
        int y = 7;

        if(x >= y) {
            System.out.println("this is true");
        } else {
            System.out.println("this is false");
        }

        if(x > y) {
            System.out.println("x is greater than y");
        } else {
            if(x < y) {
                System.out.println("x is smaller than y");
            } else {
                System.out.println("x is equal to y");
            }
        }

        if(x > y){
            System.out.println("x is greater than y");
        } else if(x == y) {
            System.out.println("x is equal to y");
        } else {
            System.out.println("x is smaller than y");
        }
    }
}
