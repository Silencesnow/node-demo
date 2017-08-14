console.log(process.argv.slice(2));
console.log(process.cwd());
process.chdir('/');
console.log(process.cwd());
NODE_ENV='production';
console.log(process.env.NODE_ENV);
console.error('An error occurred');
process.exit(1);
