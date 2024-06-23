public class SecondQuestion {
    public static void main(String[] args) throws Exception {
        int[] example = {2,3,4,5};
        printElement(example, 5);
    }

    public static void printElement(int[] array, int index) {
        if(index < array.length) {
            System.out.println(array[index]);
        } else {
            System.out.println("Index out of bounds");
        }
    }
}
