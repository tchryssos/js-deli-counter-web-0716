var katzDeli=[];

function takeANumber(katzDeliLine, name){
  var position=katzDeliLine.length+1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  } else {
    var frontPerson=katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${frontPerson}.`;
  };
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return "The line is currently empty.";
  } else {
    var lineText="The line is currently:";
    for (var i = 0; i<katzDeliLine.length;i++){
      lineText+=` ${i+1}. ${katzDeliLine[i]},`;
    }
  }
  return lineText.slice(0,-1);
}
