  // TUGAS 4 JAVASCRIPT

function jawaban (tinggi1, tinggi2, tinggi3){
  const dians = tinggi1;
  const aluh = tinggi2;
  const widya = tinggi3;

    if (dians > aluh) {
      if (dians > widya) {
        if (aluh > widya) {
          console.log("Dian, Lebih Tinggi dari yang lain", dians, "Cm")
          console.log("Aluh, Lebih Tinggi kedua", aluh, "Cm")
          console.log("Widya, Paling Pendek dari yang lain", widya, "Cm")
        }else {
          console.log("Dian, Lebih Tinggi dari yang lain", dians, "Cm")
          console.log("Widya, Lebih Tinggi kedua", widya, "Cm")
          console.log("Aluh, Paling Pendek dari yang lain", aluh, "Cm")
        }
      }else {
        console.log("Widya, Lebih Tinggi dari yang lain", widya, "Cm")
        console.log("Dians, Lebih Tinggi kedua", dians, "Cm")
        console.log("Aluh, Paling Pendek dari yang lain", aluh, "Cm")
      }
    }else {
      if (aluh > widya) {
        if (dians > widya ) {
          console.log("Aluh, Lebih Tinggi dari yang lain", aluh, "Cm")
          console.log("Dians, Lebih Tinggi kedua", dians, "Cm")
          console.log("Widya, Paling Pendek dari yang lain", widya, "Cm")
        }else {
          console.log("Aluh, Lebih Tinggi dari yang lain", aluh, "Cm")
          console.log("Widya, Lebih Tinggi kedua", widya, "Cm")
          console.log("Dians, Paling Pendek dari yang lain", dians, "Cm")
        }
      }else {
        console.log("Widya, Lebih Tinggi dari yang lain", widya, "Cm")
        console.log("Aluh, Lebih Tinggi kedua", aluh, "Cm")
        console.log("Dians, Paling Pendek dari yang lain", dians, "Cm")
      }
    }
}
jawaban(162,198,183)
