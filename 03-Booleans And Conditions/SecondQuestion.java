public class SecondQuestion {
    public static void main(String[] args) throws Exception {
       grade(-5);
    }

    public static void grade(double grade) {
        final int FAILED_GRADE = 55;
        final int GOOD_GRADE = 80;
        final int MAX_GRADE = 100;

        if(grade <= FAILED_GRADE) {
            System.out.println("you failed :(");
        } else if(grade > FAILED_GRADE && grade <= GOOD_GRADE) {
            System.out.println("the grade is good");
        } else if(grade <= MAX_GRADE){
            System.out.println("the grade is very good!");
        } else {
            System.out.println("invalid grade");
        }
    }
}
