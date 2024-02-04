#ifdef ESP32
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <TridentTD_LineNotify.h>

#define SSID "Network"
#define PASSWORD "00000000"
#define LINE_TOKEN ""

int state = 0;

void setup() {
  Serial.begin(115200);
  Serial.println("START");
  pinMode(D8, INPUT);
  Serial.println(LINE.getVersion());
  WiFi.begin(SSID, PASSWORD);
  Serial.printf("WiFi connecting ",  SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.printf("\nWiFi connected\nIP : ");
  Serial.println(WiFi.localIP());
  LINE.setToken(LINE_TOKEN);
}

void loop() {
  if (digitalRead(D8) == HIGH&&state == 0) {
    LINE.notify("ไฟไหม้!!!!!!");
    LINE.notifySticker("Fire Alarm", 4, 274);
    //LINE.notifyPicture("link");
    //Serial.println("Alarm");
    state = 1;
    delay(100);
  } else if(digitalRead(D8) == LOW) {
    state = 0;
    //Serial.println("Normal");
    delay(100);
  };
}