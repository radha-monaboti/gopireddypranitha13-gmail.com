#include<iostream>
class animal{
	public:
		void speak()
		{
			std::cout<<"The animal speaks."<<std::endl;
		}
};
int main(){
	animal myanimal;
	myanimal.speak();
	return 0;
}
