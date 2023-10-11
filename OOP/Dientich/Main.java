package Dientich;

public class Main {
        public static void main(String[] args) {
            Circle circle = new Circle();
            Rectangle rectangle = new Rectangle();
            Triangle triangle = new Triangle();

            circle.inputData();
            rectangle.inputData();
            triangle.inputData();

            circle.calArea();
            rectangle.calArea();
            triangle.calArea();
        }
    }
