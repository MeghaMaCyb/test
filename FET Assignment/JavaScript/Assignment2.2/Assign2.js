var p,n,r,CI,mycal;
p=prompt("Enter the Principal Amount");
r=prompt("Enter the Rate");
n=prompt("Enter the years");
mycal = Math.pow((1+(r/100)),n);
CI = (p * mycal) - p;
document.write("Compound interest :: " + CI);