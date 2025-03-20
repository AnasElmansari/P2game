export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, angle) {
        super(scene, x, y, 'bullet');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.2); // Mindre bullet-størrelse
        this.body.setSize(10, 10); // Mindre hitbox
        this.setCollideWorldBounds(false); // Bullet skal ikke kollidere med spilleren

        this.setRotation(angle);

        // 🚀 Sørg for, at bullets skyder fremad
        const speed = 1000; // Kugler skal flyve hurtigt
        this.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);

        // Destroy bullet efter 3 sekunder
        scene.time.delayedCall(3000, () => {
            this.destroy();
        });
    }
}
