CREATE TABLE IF NOT EXISTS label (
    id SERIAL NOT NULL,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(50) DEFAULT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id),
    CONSTRAINT UNIQUE_LABEL_NAME UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS layer (
    id SERIAL NOT NULL,
    title VARCHAR(100) NOT NULL,
    "order" INTEGER DEFAULT 0,
    label_id integer NOT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id),
    CONSTRAINT FK_LAYER_LABEL FOREIGN KEY (label_id) REFERENCES label (id)
);


CREATE TABLE IF NOT EXISTS task (
    id SERIAL NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT DEFAULT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY(id)
);

-- N x N
CREATE TABLE IF NOT EXISTS task_label (
    task_id INTEGER NOT NULL,
    label_id INTEGER NOT NULL,
    PRIMARY KEY (task_id, label_id),
    CONSTRAINT FK_TASK_LABEL_TASK FOREIGN KEY (task_id) REFERENCES task (id),
    CONSTRAINT FK_TASK_LABEL_LABEL FOREIGN KEY (label_id) REFERENCES label (id)
);