<#import "layout/defaultLayout.ftl" as layout>
<@layout.myLayout>
	<div>
		<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
			<tr>
				<td style="padding: 0px 30px 0px 30px;">
					<div class="card-header">
						<h1 style="font-size: 24px;">Hello, ${name}</h1>
					</div>
					<p>${msg}</p>

					<p style="margin-top: 5px">
						Si vous n'avez pas fait de demande, ignorez ce message simplement.
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						Cheers, <br /> Team <em>CvSkilling Pro ✨ </em>
					</p>
				</td>
			</tr>
		</table>
	</div>
</@layout.myLayout>