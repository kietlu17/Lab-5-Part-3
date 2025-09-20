const User = require('../models/User');


// Hiển thị trang đăng ký
exports.getRegister = (req, res) => {
	res.render('users/register');
};

// Xử lý đăng ký
exports.postRegister = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = new User({ username, password });
		await user.save();
		res.redirect('/users/login');
	} catch (err) {
		res.render('users/register', { error: 'Đăng ký thất bại!' });
	}
};

// Hiển thị trang đăng nhập
exports.getLogin = (req, res) => {
	res.render('users/login');
};

// Xử lý đăng nhập
exports.postLogin = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	if (!user) return res.render('users/login', { error: 'Sai tài khoản hoặc mật khẩu!' });
	const match = await user.comparePassword(password);
	if (!match) return res.render('users/login', { error: 'Sai tài khoản hoặc mật khẩu!' });
	req.session.userId = user._id;
	res.cookie('userId', user._id, { maxAge: 24 * 60 * 60 * 1000 });
	res.redirect('/products');

};

// Hiển thị trang quên mật khẩu
exports.getForgot = (req, res) => {
	res.render('users/forgot');
};

// Xử lý quên mật khẩu (giả lập)
exports.postForgot = async (req, res) => {
	const { username, newPassword } = req.body;
	const user = await User.findOne({ username });
	if (!user) return res.render('users/forgot', { error: 'Không tìm thấy tài khoản!' });
	user.password = newPassword;
	await user.save();
	res.redirect('/users/login');
};

// Đăng xuất
exports.logout = (req, res) => {
	req.session.destroy(() => {
		res.clearCookie('connect.sid');
		res.clearCookie('userId');
		res.redirect('/users/login');
	});
};
