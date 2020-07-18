#define LDR A2 //define em que porta analógica o sensor ldr está conectado 

void setup() {
  Serial.begin(9600);
  pinMode(LDR, INPUT);
}

void loop() {
  int luminosidade = analogRead(LDR);
  Serial.println(luminosidade);
  delay(1500);
}
