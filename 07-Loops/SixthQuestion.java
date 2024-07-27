public class SixthQuestion {
    public static void main(String[] args) throws Exception {
        arrayMax();
    }
    
    public static void arrayMax(){
        int[] array = {35,77,12,6,99};

        int currentMax = array[0];
        for (int index = 1; index < array.length; index++) {
            if(array[index] > currentMax){
                currentMax = array[index];
            }

        }
        System.out.println("The maximum value in the array is: " + currentMax);
    }
}
