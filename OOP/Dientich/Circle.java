package Dientich;

import java.util.Scanner;

public class Circle extends Shape {
        float radius; @Override
        public void inputData(){
            System.out.println("Nhap ban kinh hinh tron");
            Scanner nhap = new Scanner(System.in);
            radius = nhap.nextFloat();
        }
        @Override
        
        public void calArea() {
            float area = (float)(radius*radius*Math.PI);
            System.out.printf("Dien tich hinh tron la: %2f", area);
        }
    }
