public class FifthQuestion {
    public static void main(String[] args) throws Exception {
        arrayMin();
    }

    public static void arrayMin(){
        int[] array = {35,77,12,6,99};

        int currentMin = array[0];
        for (int index = 1; index < array.length; index++) {
            if (array[index] < currentMin) {
                currentMin = array[index];
            }
        }

        System.out.println("The minimum value in the array is: " + currentMin);
    }
}
