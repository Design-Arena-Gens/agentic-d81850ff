import Head from "next/head";
import Illustration from "@/components/Illustration";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharp Foundation — Finger Food, Refined</title>
        <meta
          name="description"
          content="Sharp Foundation crafts premium finger foods wrapped in innocence and modernity for the discerning palate."
        />
      </Head>
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.motif}>gentle indulgence</p>
          <h1 className={styles.title}>
            Innocence meets <span>modernity</span>
          </h1>
          <p className={styles.subtitle}>
            Sharp Foundation curates a gallery of delicate finger foods designed for women who cherish elegance in every
            bite. Exquisite flavours, whisper-soft textures, studio-lit artistry.
          </p>
          <div className={styles.ctaGroup}>
            <a className={styles.primaryCta} href="#collection">
              Explore the collection
            </a>
            <a className={styles.secondaryCta} href="#philosophy">
              Our philosophy
            </a>
          </div>
        </header>

        <section className={styles.illustrationSection}>
          <Illustration />
        </section>

        <section id="collection" className={styles.collection}>
          <div className={styles.collectionCopy}>
            <h2>The Signature Edit</h2>
            <p>
              Delicate compositions crafted with seasonal botanicals, luminous glazes, and satin finishes. Every serving
              is proportioned to delight with a single gesture.
            </p>
          </div>
          <div className={styles.collectionGrid}>
            <article>
              <h3>Petal Pearl</h3>
              <p>Pressed jasmine custard on almond sable, micro basil, alabaster cocoa veil.</p>
            </article>
            <article>
              <h3>Silk Horizon</h3>
              <p>Charred peach chiffon, blush mascarpone, champagne salt crystal.</p>
            </article>
            <article>
              <h3>Cloud Meringue</h3>
              <p>Vanilla mousse sphere, candied citrus, white tea meringue whisper.</p>
            </article>
          </div>
        </section>

        <section id="philosophy" className={styles.philosophy}>
          <div>
            <h2>Purity with an edge</h2>
            <p>
              Our atelier pursues a quiet rebellion—pairing luminous, innocent palettes with sharp architectural forms.
              A harmony that speaks to the modern woman: soft, confident, resolute.
            </p>
          </div>
          <div>
            <h2>Studio illuminated</h2>
            <p>
              Every piece is styled under controlled studio lighting to capture soft shadows, polished surfaces, and a
              serene glow that translates seamlessly to gatherings both intimate and grand.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
