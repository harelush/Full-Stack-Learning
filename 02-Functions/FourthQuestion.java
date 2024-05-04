public class FourthQuestion {
    public static void main(String[] args) throws Exception {

        double result = avg(55.5,66.8,99.0,100.0);
        System.out.println(result);

        System.out.println(avg(100, 99.5,88,66.5));

        System.out.println(avg(100.0, 99,88,66.5));


    }

    public static double avg(double firstGrade, double secondGrade, double thirdGrade, double fourthGrade) {
        return (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4.0;
    }

    public static double avg(int firstGrade, double secondGrade, int thirdGrade, double fourthGrade) {
        return (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4.0;
    }

    public static double avg(double firstGrade, int secondGrade, int thirdGrade, double fourthGrade) {
        return (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4.0;
    }

}
