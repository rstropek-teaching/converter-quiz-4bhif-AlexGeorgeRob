metrics = {"mm" : 1, "cm" : 10, "m" : 1000};
weights = {"g" : 1, "kg" : 1000};
if(6 != process.argv.length || isNaN(process.argv[2]) || process.argv[4] != "to" || (!metrics[process.argv[3]] && !weights[process.argv[3]]) || (!metrics[process.argv[5]] && !weights[process.argv[5]]) || (metrics[process.argv[3]] && weights[process.argv[5]]) || (weights[process.argv[3]] && metrics[process.argv[5]]))
    console.log("Invalid parameters");
else
    console.log(process.argv[2] + " " + process.argv[3] + " are " + (process.argv[2] * (metrics[process.argv[3]] ? metrics[process.argv[3]] : weights[process.argv[3]]) / (metrics[process.argv[5]] ? metrics[process.argv[5]] : weights[process.argv[5]]) + " " + process.argv[5]));