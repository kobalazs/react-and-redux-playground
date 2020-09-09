export default class Task {
  constructor(data) {
    this.id = data?.id;
    this.name = data?.name;
    this.color = data?.color;
    this.position = data?.position;
    this.is_done = data?.is_done;
    this.created_at = data?.created_at;
    this.updated_at = data?.updated_at;
  }
}
