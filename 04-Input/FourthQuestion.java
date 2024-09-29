import java.util.Scanner;

public class FourthQuestion {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        System.out.println("What is your grade?: ");
        double grade = input.nextDouble();
        grade(grade);
        System.out.println("hello");

    }

    public static void grade(double grade) {
        final int FAILED_GRADE = 55;
        final int GOOD_GRADE = 60;
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
