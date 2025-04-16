programa {
  funcao inicio() {
 "conversao_temperatura"
   
   real celsius, fahrenheit, kelvin

   escreva("Digite a temperatura em Celsius: ")
   leia(celsius)

   fahrenheit = (celsius * 9 / 5) + 32
   kelvin = celsius + 273.15

   escreva("Temperatura em Fahrenheit: ", fahrenheit, "°F\n")
   escreva("Temperatura em Kelvin: ", kelvin, " K\n")
  }
}
