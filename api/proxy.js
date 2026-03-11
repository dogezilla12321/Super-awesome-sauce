import Unblocker from "unblocker";

const unblocker = new Unblocker();

export default function handler(req, res) {
  unblocker(req, res);
}
