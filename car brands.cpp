#include<iostream>
class car{
	private:
		std::string brand;
		int year;
		public:
			car(std::string b,int y)
			{
				brand=b;
				year=y;
			}
			void displayDetails(){
				std::cout<<"Brand:"<<brand<<",year"<<year;
			}
};
int main(){
	car car1("Toyota",2020);
	car car2("Ford",2018);
	car1.displayDetails();
	car2.displayDetails();
	return 0;
}
