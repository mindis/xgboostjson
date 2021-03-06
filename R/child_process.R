args <- commandArgs(TRUE)
library(RJSONIO)
library(xgboost)
model <- readRDS("R/model.RDS")
newData <- xgb.DMatrix(as.matrix(data.frame(lapply(as.list(fromJSON(args[1])), as.numeric))))
cat(round(predict(model, newData), 3))
