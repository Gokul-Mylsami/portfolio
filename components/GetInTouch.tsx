import React from "react";
import styles from "../styles/GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <div className={`container ` + styles.container}>
      <h1 className={styles.getInTouchTitle}>Get In Touch</h1>
      <a href="mailto:gokulmylsami@gmail.com" className={styles.button}>
        Say Hello 👋🏻
      </a>

      <div className={styles.logoContainer}>
        <a href="https://github.com/Gokul-Mylsami">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlklEQVR4nO2aS0hVQRjHfz3MspdpSTejqLRCMQjEXVERhQW9DEIjMrIXZLbpuSh3URRp0C6iRYtWtWgRRpsgE5MeS1OKaNFT7WUPTSsG5sLtcM89M3POmXuj84PZXOZ88//fM3fmm28uRERERET8v0wHaoBmoAXoBvqAQdn65Gctsk+1fOafIh84AHQAvw3bA6BexspYZgJNwFcfRp2tHzgPFJJBZAENwJcAjTqb+BIbgex0m10APAnRqLM9Buany2xVyG/VrX0GNto2Wwv8TIPZeBsC9toyuyeNRp1NrOShT+OhDDCa+KY3hGW2CPiUASadTawjC4M2O0ZhNT4DTAAWAceB1wGYeQUcA8pk7LMu/R7J7TEwjiqIK3U8ky33zmHDqXoyyb5bluKZQ0GZLZQZj5fIPJfn1wNdwGVgG1AOzAJyZJsNVADbgSsyt17nEmuqx9SOBWG4SfGtjCV8xnloOOd3gHyN3Hgu4VPkoaHf74GjXuN3t5LwWa2gY7+fATo0DJ8gfBoVdLSbBo8BvzQM1xE++xR0CM0FJsGrNcxewx43FPRsMQncrGj2uzz820IsjgMemkTRQJsWRcOXsM9VD023TII+UzS8BvtUeWgSyYs2vYqGA8luDKZ1Kk3vTYIOKK6Io7BPjoeuHyZBBxXf8GTsE/PQJLRr80HRsPOUZINyD01CuzbdioZFidY2Rzw0PTUJelvRcBt2GSHLtak0Ce3aqCYeom3CHlsV9JwyCVyjYfgdUIyd4+FbBT2VJsFnaB4eukK+FSgBniuWhyaZDtKuYTh+K1AX8N48Wp6SVAsR9/0M1qBpOPFt75Y1KFMKpFHVFDfexK2IMVOAb4am49PrHnBaChHT0o0S2Uf0bTWsdvbIulcoRbwKYC3QqbF9FXpkT20+vtx4bdw3MZcybaf8e0KeQpFeTPFcxRn10tBsj8+f0F8cdhnkesLvrSuFmKWos8LQcKAlpizgYZJBxLa1WPaZI4sG/QmF8ReyuK5Lq6ZZ0X8kAVMstx3nYBeCHgjYoZn0hFYTr0xyES5OJuMDHqdU0aw4sy8jZHYlycAuBjxGtoLZYZlXW2Fnkovxm8ByxdVYBa9K6WYss0qxSGCKWzxRa1tCmpinkCyYkizWHUuXdp7J/UHgY4iGe2XaKQ7/GcM0efB2bl2miGffyEu6wDKoMJgoV/K7cmHLNZw1tZnwV0Nd8mQNOSIiIiIiAm/+AD7o8u7sS+G2AAAAAElFTkSuQmCC" />
        </a>
        <a href="https://www.linkedin.com/in/gokul-mylsami/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR4nO2YO08CQRDH11jYGisTW7X1E1jZKcTSL2EQJHJbEAsJiZ2FhZ2FpbWFDY/IO0YN3GIEiQWFxhhBER8oMGZvFVC4wJ3mbi/ZfzIh7GyW+e3Mzh2LkJCQkBDfkrKLSCJhhEkVYQIGWRVhEkKSbP9b8FjeNDBoUDG//p03P3hgJtt0AChlw0HwBJBEgjoA5CeOMlDRDqC2mCcNyJUEtBJjn/S7ERCapRL8tC8FR5dlqNbqECmUYWojZQyEZvVaxJVUgu5UOF9mmbAEwEpM2flOPb3VWTlZAsBl9Qx42BmgEDQToXwJJi11BrDVu5AzAcgR7TY63s8vZQC5j9tznF8bsHZK+7xBAI4I9BId7+ef8CZhK1iE7HUVXt8b8PDyoZTi8n4ORtyJ/pk0E2DGn4LbSg3UdFKswLg3ybLEI0Dh7gX6KZQvwZArzifAoJrfyaiXkpkAjWZTqf+57TQs7WYhcFHqOW8vdcMOOm8A6wdXLDBa4540DK8m4PD8vmte7va53dF4AhjD8Z+t0pOG2a2zrnmPrx/qryVmATSbHf6WyTAqJVTmRvkCYP6o9rWwACAiA98SJYTFISaiCyHRRv/lH1mcPWh+Gx0fxK9lLfzXBxlPV4uS/KgdgN7Pmx04br07BfRkwM5PBjIL2gFYFvymB4+JT1/wLQjZptzPG3kmJPpbckD/zgsJCQkhg/QJ3PVUWJ5Zt98AAAAASUVORK5CYII=" />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
