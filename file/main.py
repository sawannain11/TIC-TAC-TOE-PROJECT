t=(10,20,30,40,50)
print(t)
t=("a","b","c")
print(t)
t=(1.5,1.7,1.8,1.9)
print(t)
t=("vaishali",85,85.5,  True)
print(t)
#SINGLE ELEMENET TUPLE 
T=(10,)
print(type(T))
# acccesing the tuple element
t=("apple","banana","orange")
print(t[0]);
# tuple slicing
t=(10,20,30,40.50)
print(t[1:4]);
# reversed tuple
t=(10,20,30,40)
print(t[::-1]);
# tranversing a loop 
t=(10,20,30,40)
for i in t :
    print(i)
    t=(10,20,30)
    for i in range (len(t)):
        print(t[i]);
# tuple is imutable
# t=(10,20,30,40)
# t[1]=50
# print(t)
# joining tuple using +
t1=(10,20,30)
t2=(30,40)
print(t1+t2);
# tuple method
# tuple has only two built in method
t=(10,20,10,30,10,20)
print(t.count(10))