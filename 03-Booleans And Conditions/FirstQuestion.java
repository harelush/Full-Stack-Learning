public class FirstQuestion {
    public static void main(String[] args) throws Exception {
        verifyAge(16);
       
    }

    public static void verifyAge(double age) {
        final int ALLOWED_AGE = 18;
        
        if(age >= ALLOWED_AGE) {
            System.out.println("allowed!");
        } else {
            System.out.println("you are not allowed, come back later!");
        }
    }
}
