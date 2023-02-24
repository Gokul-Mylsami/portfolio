import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <Image
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2aS2sUQRDHZ2siIuqnEBRNwM/gG0E9ePJ1URDi2+QL7CnbNYoHj168GSQgfoTcvKjZqt3ER4iKHjWIRsVoIi29WXcVcc3sPHpn8/9BX/YwNVX/7aruqgkCAAAAAAAAAAAAdOLWo3XEeqLEepeMzJHRz8T6hVhflYzeI66eDm7OrkcQMyBkOdAIOqvtvOR1GMmhLN5hzUIVGSajy/8PfkuEHxTped/v3ReEler+eMFvLqPLYaR7fL9/H+R8eRE7+G0RZoPy5IBvNwoLRbWTXQe/uUKWo779KCyN005CAUpGbvv2o7CQ0ZdJBSAjT3z7UViaZ/ykAiz49qOwNC9ayQRg+eTbj8KS6ATU3gFzvv1Y20WY5Y5vPwqL6/ukkIKO+faj2BexJCchl35wEUuhCed6O7GDr8uhkd0JzQMHGbkUU4QlYj2L6KVIGOkRYnmzin/+bGhqe9O0DX5x48EGMnKmZOS+G8IQy1d3zifW5yWWcarocVc3EDAAAAAAAJCA5H2gldWT9ri+nVhGG8dnI0qsb8nIIhn9TizviUVKLBNkdCQw9Z2BD/pOgOjp5sat3sizLp474wQLytOb0oqv/4DkZa88OeC+UyKW+eTPbzzjai5Nxr4Q4Fp9Cxl5mNazf1tTQaTbsoh7tgHJ0V7IepBYP2YQ/JVlZCE0chgC8N8CuEHQSkHNKPjttUSmego7gNtBCbm2L6fgt0TI5IPkoqYgYv2QY/Bb6SioyFYIwDkH/k8RHqd6OirwDrD+RNArEIB9iiDz7sKHHcBeRRiFAOw1Fc1AAPZbC4IxGUIR5lZKqDWKI1cHg+uysbG4Ouh+I9Z6zxbjwp+CjCwSy7mgbOmfRicmQjJ6gVi+pWnbfVe7tgUwshhG1V2rte2+4ktVBKPVrgOfdkDytkduVWQ4vr+1iykK8C52wLMKSN72iKXWMe10TkfTae3A2PazCkje9ojlctc+Gx3J2+/MA5K7vbGpHV07PSZDEIATCpBkbuvmxtgB6nXrQwCGAF7+CdQjW79X3gMCMASw2AFIQRYpiFEDUIQZRdjiFIRjqMUxlHEPwEWMcRGzuAmjFWHRimD0gtCMYzTjLLqhaEdbtKMZ8wAMZBgDGYuJGEaSFiPJhGAmzBjKe/knUI98jdAr7wEBGAJY7ACkIIsUxKgBKMLsoQgDAAAAAAAAAABBP/ETd9vQVQ8NGYQAAAAASUVORK5CYII="
            }
            width={48}
            height={48}
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={
              "data:image/png;base64,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"
            }
            width={48}
            height={48}
          />
        </div>
      </div>
      <p className={styles.copyright}>
        <span className={styles.copyrightLogo}>&copy;</span> Copyright Gokul
        Mylsami
      </p>
    </div>
  );
};

export default Footer;
