'use client';

import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container fluid className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center bg-hero-pattern bg-cover bg-center py-5">
      <div className="rounded-circle p-1">
        <Image src="/logo_panda.png" alt="logo" width={240} height={240} />
      </div>
      <div className={styles.bgTransparent}>
        <h1 className="display-4 font-bold mb-3">
          Welcome to the Cute Animals <br />
          DEATHLY Fight Club!
        </h1>
        <p className="lead mb-4">An epic battle between adorable and fierce animals awaits you!</p>
        <Link href="/create" className="font-bold mb-5 py-2 px-4" style={{ display: 'inline-block', backgroundColor: '#007bff', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none' }}>
          CREATE your Deathly Fighter
        </Link>
        <Link href="/play" className="font-bold mb-5 mx-2 py-2 px-4" style={{ display: 'inline-block', backgroundColor: '#007bff', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none' }}>
         PLAY
        </Link>
      </div>
      <Row className="justify-content-center py-5">
        <Col xs="auto" className="m-2">
          <div className={`${styles.animalCircle} ${styles.pos1}`}>
            <Image src="/animals/small/dirty_lemur.png" width={184} height={184} className="img-fluid rounded-circle" alt="Dirty Lemur" />
          </div>
        </Col>
        <Col xs="auto" className="m-2">
          <div className={`${styles.animalCircle} ${styles.pos2}`}>
            <Image src="/animals/small/dirty_panda.png" width={184} height={184} className="img-fluid rounded-circle" alt="Dirty Panda" />
          </div>
        </Col>
        <Col xs="auto" className="m-2">
          <div className={`${styles.animalCircle} ${styles.pos2}`}>
            <Image src="/animals/small/dirty_red-shanked-douc.png" width={184} height={184} className="img-fluid rounded-circle" alt="Dirty Red-shanked Douc" />
          </div>
        </Col>
        <Col xs="auto" className="m-2">
          <div className={`${styles.animalCircle} ${styles.pos2}`}>
            <Image src="/animals/small/dirty_slow_loris.png" width={184} height={184} className="img-fluid rounded-circle" alt="Dirty Slow Loris" />
          </div>
        </Col>
        <Col xs="auto" className="m-2">
          <div className={`${styles.animalCircle} ${styles.pos1}`}>
            <Image src="/animals/small/crazy_panda.png" width={184} height={184} className="img-fluid rounded-circle" alt="Crazy Panda" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
