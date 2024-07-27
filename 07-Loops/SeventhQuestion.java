public class SeventhQuestion {
    public static void main(String[] args) throws Exception {
        int[] array = {35,77,12,6,99};
        int value = 112;
        System.out.println(findInArray(array, value));
    }

    public static boolean findInArray(int[] array, int value){
        for(int index = 0; index < array.length; index++){
            if(array[index] == value){
                return true;
            }
        }

        return false;
    }
}
