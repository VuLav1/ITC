package Dientich;

import java.util.Scanner;

public class Triangle extends Shape {
        float d;
        float h; 
        @Override
        public void inputData(){
            System.out.println("Nhap chieu dai day hinh tam giac");
            System.out.println("Nhap chieu dai chieu cao hinh tam giac");
            Scanner nhap1 = new Scanner(System.in);
            d = nhap1.nextFloat();
            Scanner nhap2 = new Scanner(System.in);
            h = nhap2.nextFloat();
        }
        @Override
        public void calArea() {
            float area = (float)(1/2*(d*h));
            System.out.printf("Dien tich hinh tam giac la: %2f", area);
        }
    }
